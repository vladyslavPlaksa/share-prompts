'use client';

import { useState } from 'react';

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

const Feed = ({ data }) => {
    const [searchText, setSearchText] = useState('');

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleSearchChange = event_ => {};

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
