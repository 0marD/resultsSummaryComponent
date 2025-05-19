import type { FC } from "react";

const CardResult: FC = () => {
    return (
     
            <section className="cardResult">
                <h2 className="cardResult-header">Your Result</h2>
                <div className="cardResult-circle">
                    <span className="cardResult-circleScore">76 </span>
                    <span className="cardResult-circleTotal">of 100</span>
                </div>
                <p className="cardResult-paragraph">
                    <span className="cardResult-paragraphRating">Great</span>
                    <span className="cardResult-paragraphDescription">You scored higher than 66% of the people who have taken these tests.</span>
                </p>
            </section>

    );
};

export { CardResult };