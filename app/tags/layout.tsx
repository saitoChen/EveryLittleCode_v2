const TagsLayout  = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <>
            <div className='mx-10 sm:mx-20 sm:mt-28'>
                <h3 className="mt-2 text-2xl text-title">Tags</h3>
            </div>
            <div className="mx-10 mt-12 sm:mx-20 sm:mt-14">{children}</div>
        </>
    )
}

export default TagsLayout