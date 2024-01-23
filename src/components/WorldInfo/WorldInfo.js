import imgFile from '../../images/Barbarian.png.png';

function WorldInfo() {
    return (
        <div className="World-info">
            <img src={imgFile} alt='Stylized atom' />
            <p>This land is the world of humans!</p>
        </div>
    );
}

export default WorldInfo;