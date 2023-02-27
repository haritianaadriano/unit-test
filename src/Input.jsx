export function Input(props) {
    const { onChange, onKeyUp } = props;

    return (
        <input id='add-todo' data-test-id="input-test" type="text" onChange={onChange} onKeyUp={onKeyUp}/>
    );
}