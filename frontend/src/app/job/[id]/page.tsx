"use client";

import React from "react";
import JobDetailPage from "../../../components/Job/JobDetailPage";

export default function Page(props: { params: Promise<{ id: string }> }) {
    const params = React.use(props.params); // unwrap Promise
    return <JobDetailPage id={params.id} />;
}
