
export const Button = (props) => {
    console.log("button render", props.children);

    return <button {...props} />;
};