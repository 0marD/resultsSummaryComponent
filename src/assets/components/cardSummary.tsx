import type { FC } from "react";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const CardSummary: FC = () => {
  return (
    <section className="cardSummary">
      <header className="cardSummary__header">
        <h3 className="cardSummary__header-text">Summary</h3>
      </header>

      <ul className="cardSummary__list">
        <li className="cardSummary__item cardSummary__item--reaction">
          <span className="cardSummary__label">
            <BoltIcon className="cardSummary__icon" />
            Reaction
          </span>
          <span className="cardSummary__score">80 <span className="cardSummary__score-total">/ 100</span></span>
        </li>

        <li className="cardSummary__item cardSummary__item--memory">
          <span className="cardSummary__label">
            <DevicePhoneMobileIcon className="cardSummary__icon" />
            Memory
          </span>
          <span className="cardSummary__score">92 <span className="cardSummary__score-total">/ 100</span></span>
        </li>

        <li className="cardSummary__item cardSummary__item--verbal">
          <span className="cardSummary__label">
            <ChatBubbleBottomCenterTextIcon className="cardSummary__icon" />
            Verbal
          </span>
          <span className="cardSummary__score">62 <span className="cardSummary__score-total">/ 100</span></span>
        </li>

        <li className="cardSummary__item cardSummary__item--visual">
          <span className="cardSummary__label">
            <EyeIcon className="cardSummary__icon" />
            Visual
          </span>
          <span className="cardSummary__score">73 <span className="cardSummary__score-total">/ 100</span></span>
        </li>
      </ul>

      <button className="cardSummary__button">Continue</button>
    </section>
  );
};

export { CardSummary };