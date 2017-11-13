import React from "react";
import { FormattedMessage, FormattedTime } from "react-intl";

export default function TimeTable(props) {
    return (
        <div>
            <h3><FormattedMessage id="cc.Timetable.header" /></h3>
            <p>
                <FormattedMessage id="cc.Timetable.openDays" /> 
                <br />
                <FormattedMessage id="cc.Timetable.hourRange" values={openingTime} />
                <br />
                <FormattedMessage id="cc.Timetable.hourRange" values={closingTime} />
            </p>
        </div>
    );
}

const openingTime = {
    start: <FormattedTime value={new Date(1970, 1, 1, 10, 0)} />,
    end: <FormattedTime value={new Date(1970, 1, 1, 13, 0)} />
}

const closingTime = {
    start: <FormattedTime value={new Date(1970, 1, 1, 14, 0)} />,
    end: <FormattedTime value={new Date(1970, 1, 1, 19, 0)} />
}