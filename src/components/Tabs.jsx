
export default function Tabs({ buttons, children, wrapper }) {
    const Wrapper = wrapper;
    return (<>
        <Wrapper>
            {buttons}
        </Wrapper>
        {children}
    </>);
}