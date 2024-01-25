const CurrentPage = ({
    page
}) => {
    return (
        <div className="Current-page">
            <h2>{page.id}</h2>
            <h4>{page.changeNotices}</h4>
            <h6>{page.description}</h6>
        </div>
    );
}

export default CurrentPage;