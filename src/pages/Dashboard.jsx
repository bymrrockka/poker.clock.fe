import {Component} from "react";

export class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="games dropdown" text="Active games" activeCounter={1}>
                    <div className="game element">
                        <div>
                            <p>Status: Active</p>
                        </div>
                        <div>
                            <p>Type: Tournament</p>
                            <p>Buy in: 30</p>
                            <p>Players: 4</p>
                            <p>Started: 2025-10-25 18:14</p>
                        </div>
                    </div>
                </div>

                <div className="games dropdown" text="Finished games" unpaidCounter={1}>
                    <div className="game element unpaid">
                        <div>
                            <p>Status: Finished</p>
                        </div>
                        <div>
                            <p>Type: Bounty Tournament</p>
                            <p>Buy in: 30</p>
                            <p>Players: 7</p>
                            <p>Started: 2025-10-21 18:14</p>
                            <p>Finished: 2025-10-22 01:21</p>
                        </div>
                    </div>
                    <div className="game element">
                        <div>
                            <p>Status: Finished</p>
                        </div>
                        <div>
                            <p>Type: Tournament</p>
                            <p>Buy in: 30</p>
                            <p>Players: 3</p>
                            <p>Started: 2025-10-11 18:14</p>
                            <p>Finished: 2025-10-12 01:21</p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}