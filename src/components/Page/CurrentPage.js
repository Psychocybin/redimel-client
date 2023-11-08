const CurrentPage = ({
    page
}) => {
    return (
        <div className="Current-page">
            <h2>{page.changeNotices}</h2>
            <h6>{page.description}</h6>
        </div>
    );
}

export default CurrentPage;