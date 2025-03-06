import styled from 'styled-components';
type TooltipPorps = {
    name : string,
    showTooltip : string
}
const Tooltip = ({name,showTooltip}:TooltipPorps) => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <span className="tooltip">{showTooltip}</span>
        <span className="text">
          {name}
        </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    display: flex;
    align-items: center;
    position: relative;
    transition: all 0.3s;
    padding: 11px 0;
    border-radius: 12px;
    cursor: pointer;
    
  }

  .text  {
    font-weight: 600;
    color: rgb(0, 0, 0);
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 60%;
    transform: translateX(-50%);
    padding: 0.3em 0.6em;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    color: rgb(34, 34, 34);
    font-size: 10px;
    font-weight: 500;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    bottom: -0.2em;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    background-color: rgb(255, 255, 255);
  }

  .tooltip-container:hover .tooltip {
    top: -80%;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }`;

export default Tooltip;
