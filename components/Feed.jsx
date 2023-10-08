'use client';

import { useEffect, useState } from 'react';

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
    const [data, setData] = useState([]);

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleSearchChange = event_ => {};

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('/api/prompt');

            if (!response.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data');
            }

            const posts = await response.json();

            setData(posts);
        };
        getData();
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
            <PromptCardList data={data} handleTagClick={() => {}} />
        </section>
    );
};

export default Feed;
