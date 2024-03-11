const CurrentPage = ({
    page
}) => {
    return (
        <div className="Current-page">
            <h5 className="page-change-notices">{page.changeNotices}</h5>
            <div className="page-text">{page.description}</div>
            <div className="page-choices">
                {page.choices.map(x =>
                    <button key={x.id}>{x.description}</button>)}
            </div>
        </div>
    );
}

export default CurrentPage;