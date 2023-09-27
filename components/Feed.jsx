'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='prompt_layout mt-16'>
            {data.map(post => (
                // eslint-disable-next-line no-underscore-dangle
                <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
            ))}
        </div>
    );
};

const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSearchChange = event_ => {};

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();

            setPosts(data);
        })();
    }, []);
    return (
        <section className='feed'>
            <form className='flex-center relative w-full'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />
            </form>
            <PromptCardList data={posts} handleTagClick={() => {}} />
        </section>
    );
};

export default Feed;
