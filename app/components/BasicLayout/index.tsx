const BasicLayout = ({ title, content }: { title: string, content: React.ReactNode }) => {
    return (
        <>
            <div className='mx-10 sm:mx-20 sm:mt-28'>
                <h3 className="mt-2 text-2xl text-title">{ title }</h3>
            </div>
            <div className="mx-10 mt-12 sm:mx-20 sm:mt-14">{content}</div>
        </>
    )
}

export default BasicLayout