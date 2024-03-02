const CurrentPage = ({
    page
}) => {



    console.log(page);

    return (
        <div className="Current-page">
            <h5 className="page-change-notices">{page.changeNotices}</h5>
            <div className="page-text">{page.description}cdsjjdbsbdhbdshbdsbdbsbfksdbfjvndslvndsaiuvjvn;jvnrkufhsfnealfkbecunksjnfkj fksdk  sbv sg gs  gs gbs jgsg g  bgsj gs ggg  ss  gs sgs g s gs ggs bsdfb sdhj bshd f shs sb sh sd bsd bfdshbf hjds fhjds hj s sfsdf </div>
            <div className="page-choices">
                {page.choices.map(x =>
                    <button key={x.id}>{x.description}</button>)}
            </div>
        </div>
    );
}

export default CurrentPage;