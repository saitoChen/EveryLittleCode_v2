const BasicLayout = ({ title, content, children }: { title: string, content?: React.ReactNode, children?: React.ReactNode}) => {
    return (
        <div className="mx-10 sm:mx-20">
            <div className='sm:mt-28'>
                <h3 className="mt-2 text-2xl text-title">{ title }</h3>
            </div>
            <div className=" mt-12 sm:mt-14">{content || children}</div>
        </div>
    )
}

export default BasicLayout