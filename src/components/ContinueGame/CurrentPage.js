import { convertStringToArray } from "../../services/AuxiliaryService";

const CurrentPage = ({
    page, onChoiceAction
}) => {    
    return (
        <div className="Current-page">
            <h5 className="page-change-notices">{page.changeNotices}</h5>
            <div className="page-text">{convertStringToArray(page.description).map((x, index) => <p key={index}>{x}</p>)}</div>
            <div className="page-choices">
                {page.choices.map(x =>
                    <button key={x.id} onClick={(event) => onChoiceAction(x, event)}>{x.description}</button>)}
            </div>
        </div>
    );
}

export default CurrentPage;