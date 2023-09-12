import DonaterContext from "./DonaterContext"
import { useContext } from "react"
import { Button, Checkbox, Select, MenuItem, FormControlLabel } from "@mui/material";

const Step3MedicalInfo = ({ handleNext }) => {

  const { data, handleChange } = useContext(DonaterContext)


  return (
    <>

      <div classNameName="form-text">
        <FormControlLabel
          control={
            <Checkbox
              name="high_blood_pressure"
              id="high_blood_pressure"
              checked={data.high_blood_pressure}
              label="high_blood_pressure"
              onChange={handleChange}
            />
          }
          label=" high_blood_pressure" />


      </div>
      {data.high_blood_pressure}
      <div classNameName="form-text">
        <Select
          labelId="blood_type"
          name="blood_type"
          id="blood_type"
          value={data.blood_type}
          error={!data.blood_type}
          label="blood_type"
          onChange={handleChange}
        >
          <MenuItem value={'O+'}>O+</MenuItem>
          <MenuItem value={'O-'}>O-</MenuItem>
        </Select>
        <Button
          disabled={!data.blood_type}
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 1, mr: 1 }}
        >
          {'Continue'}
        </Button>
      </div>









    </>
  );
};

export default Step3MedicalInfo;
