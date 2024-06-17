import React, { useState } from "react";

function FormData() {
  const [count, setCount] = useState(0);
  const [addDisabled, setAddDisabled] = useState(false);
  const [subtractDisabled, setSubtractDisabled] = useState(false);

  //react style component
  const styles = {
    count: {
      color: "green",
    },
    noData: {
      color: "red",
    },
  };

  const handleAdd = () => {
    setCount(count + 1);
    if (count < 10) setSubtractDisabled(true);
    else setSubtractDisabled(false);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      // setCount(0);
      setSubtractDisabled(true);
    }

    setAddDisabled(false);
  };

  return (
    <div>
      {count > 0 ? (
        <p>
          You clicked:<span style={styles.count}> {count} times</span>
        </p>
      ) : (
        <p style={styles.noData}>No Data </p>
      )}
      <button
        class="btn btn-success "
        onClick={handleAdd}
        // onMouseOut={setSubtractDisabled(false)}
        disabled={addDisabled}
      >
        Add
      </button>
      <button
        class="btn btn-warning "
        onClick={handleSubtract}
        // onBlur={setAddDisabled(false)}
        disabled={subtractDisabled}
      >
        Subtract
      </button>
    </div>
  );
}

export default FormData;
