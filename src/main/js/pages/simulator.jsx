import React, { useCallback } from 'react';
import {
  Toolbar,
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  IconButton,
  Tooltip,
} from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useForm, Controller } from 'react-hook-form';
import {
  toggle,
  updateForm,
  selectSimulatorState,
} from '../redux/components/simulator/simulatorSlice';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

const GridControls = ({ inputs, controlName, formControl }) => {
  const dispatch = useDispatch();
  debugger;
  return (
    <Grid container spacing={2} p={5}>
      {inputs.map((input, i) => (
        <Grid item xs={input.xs} key={`${i}+gridcontrol`}>
          <FormGroup row={true}>
            <Controller
              control={formControl}
              name={input.title}
              defaultValue={input.value}
              render={({ field }) => (
                <FormControlLabel
                  control={<TextField {...field} type="number" label={input.title} />}
                />
              )}
            />
            <Controller
              control={formControl}
              name={input.title + 'Dynamic'}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel control={<Checkbox {...field} />} label="Dynamic?" />
              )}
            />
          </FormGroup>
        </Grid>
        /* <FormControlLabel control={<Checkbox />} label="Dinamyc?" /> */
      ))}
    </Grid>
  );
};

const Simulator = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const controls = useSelector(selectSimulatorState);

  const { control: formControl, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(updateForm(data));

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {controls.map((control, i) => {
            const Icon = control.Icon;
            return (
              <Grid item xs={control.xs} key={`${i}+simgrid`}>
                <Toolbar sx={{ bgcolor: '#118ab2' }}>
                  <Icon sx={{ fill: '#e5e5e5' }} />
                  <Typography
                    variant="h6"
                    sx={{
                      flex: '1 1 100%',
                      color: '#edf2f4',
                    }}
                  >
                    {t(control.name)}
                  </Typography>
                </Toolbar>
                <GridControls
                  inputs={control.inputs}
                  controlName={control.name}
                  formControl={formControl}
                />
              </Grid>
            );
          })}
        </Grid>

        <Toolbar
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexShrink: 1,
            justifyContent: 'space-between',
            color: 'transparent',
          }}
        >
          {' '}
          <Box
            sx={{
              marginLeft: 'auto',
              justifyContent: 'flex-end',
            }}
          >
            <Tooltip title="Start simulation">
              <IconButton
                size="large"
                edge="end"
                color="primary"
                aria-label="open drawer"
                type="submit"
              >
                <PlayCircleFilledIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Stop simulation">
              <IconButton size="large" edge="end" color="primary" aria-label="open drawer">
                <StopCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </form>
    </Container>
  );
};

export default Simulator;
