import React from "react";
import TextField from "@material-ui/core/TextField";
// import "./App.css";
// import "./stream-newcall.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  popup: {
    maxWidth: "sm",
    display: "inline-block",
    justifyContent: "center",
    alignItem: "center",
  },
});

function ScheduleCall() {
  const [values, setValues] = useState({
    date: "",
    time: "",
    description: "",
  });

  const { date, time, description } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();

  return (
    <div className="scall">
      <form className={classes.popup}>
        <TextField
          variant="outlined"
          fullWidth={true}
          color="white"
          type="date"
          value={date}
          onChange={handleChange("date")}
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          color="white"
          type="time"
          value={time}
          onChange={handleChange("time")}
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          color="white"
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleChange("description")}
        />

        <div className="csh">
          <Button variant="contained">Copy</Button>
          <Button variant="contained">Schedule</Button>
          <Button variant="contained">Share</Button>
        </div>
      </form>
      <p>{JSON.stringify(values)}</p>
    </div>
  );
}

export default ScheduleCall;
