import PropTypes from "prop-types";

const CodeInfo = (props) => {
  let getText = (textArr) => {
    let info = [];
    for (let i = 0; i < textArr.length; i++) {
      let titleElement = <h4 className="code-title">{textArr[i].title}</h4>;
      let infoElement = <p className="code-info">{textArr[i].info}</p>;

      info.push(
        <div className={textArr[i].classes}>
          {titleElement}
          {infoElement}
        </div>
      );
    }
    return info;
  };

  return getText(props.info);
};

CodeInfo.propTypes = {
  description: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      classes: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CodeInfo;
