import IconSwitch from '../IconSwitch/IconSwitch';

const Store = () => {
  return (
      <div>
        <IconSwitch
          icon={"view_list"}
          onSwitch={() => console.log("change state here")}
        />
      </div>
  );
};

export default Store;
