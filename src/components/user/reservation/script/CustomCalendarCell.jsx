function CustomCalendarCell({date, customContent, onClickHandler}){


    return (
        <>
            <div id="cell" onClick={onClickHandler}>
                <p>{date}</p>
                {customContent}
            </div>
        </>
    );
}

export default CustomCalendarCell;