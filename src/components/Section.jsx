
export default function Section({title, children, ...props}) { // the "..." format collects all the other props than explicit name as 'title' or children
    return (
        // here we're setting all the properties collected in props to all name matcing attrs in section
        <section {...props}> 
            <h2>{title}</h2>
            {children}
        </section>
    );
}