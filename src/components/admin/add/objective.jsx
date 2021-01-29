import React from "react";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const Objective = () => {
  return (
    <>
      <h5>Objective</h5>
      <form className="form-inline row mb-3">
        <div className="form-group col-md-9">
          <input
            className="form-control w-100"
            type="text"
            placeholder="Video title"
            name="title"
            // onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className="w-100"
          >
            add
          </Button>
        </div>
      </form>
      <Paper elevation={4} className="p-1 mb-1">
        dshfhs
      </Paper>
      <Paper elevation={4} className="p-1 mb-1">
        dshfhs
      </Paper>
    </>
  );
};

export default Objective;
