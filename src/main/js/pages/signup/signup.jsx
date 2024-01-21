import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Copyright from "Components/Copyright";
import {useDispatch} from "react-redux";
import AuthService from "Services/AuthService";
import {useTranslation} from "react-i18next";
import ROUTES from "Constants/routes";
import {FormControl, Input, InputAdornment, LinearProgress, MenuItem} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import PasswordStrengthBar from "react-password-strength-bar";
import MuiPhoneNumber from "material-ui-phone-number";

const defaultTheme = createTheme();

const registerSchema = {
    name: string()
        .nonempty('Name is required')
        .max(32, 'Name must be less than 100 characters'),
    email: string().nonempty('Email is required').email('Email is invalid'),
    password: string()
        .nonempty('Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: string().nonempty('Please confirm your password'),
    terms: literal(true, {
        invalid_type_error: 'Accept Terms is required',
    }),
}.refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match',
});

const SignUp = () => {
    const dispatch = useDispatch();
    const [t] = useTranslation();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: '',
        birthdate: null,
        phoneNumber: '',
        country: 'Colombia',
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realiza la lógica de envío del formulario aquí
        // No se enviará el campo 'confirmPassword'
        const {confirmPassword, ...formDataWithoutConfirmPassword} = formData;
        console.log('Datos del formulario enviados:',);

        dispatch(
            AuthService.signup(formDataWithoutConfirmPassword),
        );
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {t("common.sign.up")}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{mt: 3}}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="John Doe"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <DatePicker required fullWidth id="birthdate" name="birthdate" label="Birth Date" value={formData.birthdate}
                                            onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs={8}>
                                <InputLabel>Phone Number</InputLabel>
                                <MuiPhoneNumber defaultCountry={'us'} onChange={handleInputChange} required fullWidth name="phoneNumber" input="phoneNumber"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleInputChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleTogglePassword}
                                                    onMouseDown={handleTogglePassword}
                                                >
                                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <PasswordStrengthBar password={formData.password}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleInputChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleTogglePassword}
                                                    onMouseDown={handleTogglePassword}
                                                >
                                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            {t("common.sign.up")}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href={ROUTES.SIGNIN} variant="body2">
                                    {t("common.register.login")}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
};

export default SignUp;
