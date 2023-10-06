import Feed from '@components/Feed';

async function getData() {
    const response = await fetch(
        process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
            ? 'http://localhost:3000/api/prompt'
            : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/prompt}`,
        { next: { revalidate: 10 } }
    );

    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

const Home = async () => {
    const data = await getData();
    return (
        <section className='flex-center w-full flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>AI-Powered prompts</span>
            </h1>
            <p className='desc text-center'>
                Promptopia is an open-source AI prompting tool for the modern world to discover,
                create and share creative prompts
            </p>

            <Feed data={data} />
        </section>
    );
};

export default Home;
