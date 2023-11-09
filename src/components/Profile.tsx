import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  SelectChangeEvent,
} from "@mui/material";
import countries from "../mockdata/countries";
import { useNavigate } from "react-router-dom";
import ROUTES from "../services/routes";

interface ProfileState {
  firstName: string;
  lastName: string;
  jobTitle: string;
  country: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();

  // Initialize state with empty default values or fetch from an API
  const [profile, setProfile] = useState<ProfileState>({
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Front-end Developer",
    country: "DE",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the backend
    navigate(ROUTES.DASHBOARD);
  };

  const handleSelectChange = (event: SelectChangeEvent): void => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <Grid
      container
      style={{ minHeight: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Container component={Paper} maxWidth="sm" style={{ padding: "2rem" }}>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={profile.jobTitle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Location</InputLabel>
                <Select
                  required
                  labelId="country-label"
                  id="country"
                  name="country"
                  value={profile.country}
                  onChange={handleSelectChange}
                  label="Country"
                >
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Save & continue
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Grid>
  );
};

export default Profile;
