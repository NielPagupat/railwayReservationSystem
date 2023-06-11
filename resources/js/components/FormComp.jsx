import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

import React from 'react'

export default function FormComp() {
  return (
    <FormControl>
    <FormLabel>Train Number</FormLabel>
    <TextField></TextField>
    <FormLabel>Book date</FormLabel>
    <TextField></TextField>
    <FormLabel>route</FormLabel>
    <TextField></TextField>
    <FormLabel>category</FormLabel>
    <TextField></TextField>
    <FormLabel>schedule</FormLabel>
    <TextField></TextField>
    <FormLabel>Source</FormLabel>
    <TextField></TextField>
    <FormLabel>Destination</FormLabel>
    <TextField></TextField>
    <FormLabel>Name</FormLabel>
    <TextField></TextField>
    <FormLabel>Age</FormLabel>
    <TextField></TextField>
    <FormLabel>Sex</FormLabel>
    <TextField></TextField>
    <FormLabel>Address</FormLabel>
    <TextField></TextField>
    <Button>Submit</Button>
    </FormControl>
  )
}
