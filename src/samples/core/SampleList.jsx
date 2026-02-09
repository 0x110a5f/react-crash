function SampleListItem() {
    return (
        <div className="sample-list-item">
            List item.
        </div>
    )
}

export default function SampleList() {
    /* Should always return a single root element */
    return (
        <>
            <SampleListItem />
            <SampleListItem />
            <SampleListItem />
        </>
    )
}