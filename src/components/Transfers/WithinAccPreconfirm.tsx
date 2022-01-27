import React from "react";

type Props = {
    data: any;
}
const WithinAccPreconfirm = ({ data }: Props) =>  {
        return (
        <React.Fragment>
            <h2> Into Preconfirm </h2>
            <h1>{data.fromAcc}</h1>
            <h1>{data.toAcc}</h1>
            <h1>{data.amount}</h1>
            </React.Fragment>
        );
}

export default WithinAccPreconfirm;