const hoc = (Component) => {
  return function HOC() {
    return (
      <div>
        <p>
          Hello Shweta <Component />
        </p>
      </div>
    );
  };
};

export default hoc;
