import './button.css';

const Button = (props) => {
  const styles = {
    btn: {
      color: props.color,
      backgroundColor: props.backColor,
    },
  };
  return <button style={styles.btn}>{props.name}</button>;
};

export default Button;
