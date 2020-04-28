import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Link,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import BusinessIcon from '@material-ui/icons/Business';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    maxWidth: '1000px',

    maxHeight: '100%',
    overflowY: 'auto',
    width: '100%',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  container: {
    marginTop: theme.spacing(3),
    height: 200
  },
  cardHeaderStyle: {
    paddingLeft: '40px',
    paddingRight: '40px'
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px'
  },
  gridHeight: {
    minHeight: '70px'
  },
  spacing: {
    '& + &': {
      paddingLeft: theme.spacing(5)
    }
  },
  textFieldStyle: {
    minHeight: '45px'
  },
  iconStyle: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    cursor: 'pointer',
    '&:hover': {
      background: '#e8e8e8'
    }
  },
  showMore: {
    display: 'flex',
    alignItems: 'center'
  },
  addMore: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto'
  },
  selectStyle: {
    width: '100%',
    minHeight: '45px'
  },
  select__img: {
    height: '20px',
    margin: '0 auto'
  },
  action__button: {
    '& + &': {
      marginLeft: '20px'
    },
    '@media (min-width: 767px)': {
      width: '195px',
      height: '60px'
    }
  }
}));

function ContactModal({
  open, onClose, className, ...rest
}) {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const [showMore, setShowMore] = useState(false);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    event.persist();

    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...prevFormState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...prevFormState.touched,
        [event.target.name]: true
      }
    }));
  };

  const hasError = (field) => (!!(formState.touched[field] && formState.errors[field]));

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader
          className={classes.cardHeaderStyle}
          title="Create new contact"
          titleTypographyProps={{ variant: 'h3' }}
        />
        <CardContent>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <div className={classes.iconStyle}>
                <ControlPointIcon />
              </div>
            </Grid>
            <Grid item xs={5} className={classes.spacing}>
              <TextField
                error={hasError('firstName')}
                fullWidth
                className={classes.textFieldStyle}
                helperText={hasError('firstName') ? formState.errors.firstName[0] : null}
                label="First Name"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={formState.values.firstName || ''}
              />
            </Grid>
            <Grid item xs={5} className={classes.spacing}>
              <TextField
                error={hasError('lastName')}
                fullWidth
                className={classes.textFieldStyle}
                helperText={
                  hasError('lastName') ? formState.errors.lastName[0] : null
                }
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                type="text"
                value={formState.values.lastName || ''}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <div className={classes.iconStyle}>
                <BusinessIcon />
              </div>
            </Grid>
            <Grid item xs={5} className={classes.spacing}>
              <TextField
                error={hasError('company')}
                fullWidth
                className={classes.textFieldStyle}
                helperText={hasError('company') ? formState.errors.company[0] : null}
                label="Company"
                name="company"
                type="text"
                onChange={handleChange}
                value={formState.values.company || ''}
              />
            </Grid>
            <Grid item xs={5} className={classes.spacing}>
              <TextField
                error={hasError('jobTitle')}
                fullWidth
                className={classes.textFieldStyle}
                helperText={
                  hasError('jobTitle') ? formState.errors.jobTitle[0] : null
                }
                label="Job title"
                name="jobTitle"
                onChange={handleChange}
                type="text"
                value={formState.values.jobTitle || ''}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <div className={classes.iconStyle}>
                <MailOutlineIcon />
              </div>
            </Grid>
            <Grid item xs={10} className={classes.spacing}>
              <TextField
                error={hasError('emailAddess')}
                fullWidth
                className={classes.textFieldStyle}
                helperText={
                  hasError('emailAddess') ? formState.errors.emailAddess[0] : null
                }
                label="Email addess"
                name="emailAddess"
                onChange={handleChange}
                type="text"
                value={formState.values.emailAddess || ''}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <div className={classes.iconStyle}>
                <PhoneIcon />
              </div>
            </Grid>
            <Grid item xs={2} sm={1} className={classes.spacing}>
              <Select
                name="phoneSelect"
                value={formState.values.phoneSelect || 'Select'}
                className={classes.selectStyle}
                onChange={handleChange}
              >
                <MenuItem value={1}>
                  <img
                    className={classes.select__img}
                    alt="usaToday"
                    src="/images/icons/usaToday.svg"
                  />
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={8} sm={9} className={classes.spacing}>
              <TextField
                error={hasError('phone')}
                fullWidth
                className={classes.textFieldStyle}
                helperText={
                  hasError('phone') ? formState.errors.phone[0] : null
                }
                label="Phone"
                name="phone"
                onChange={handleChange}
                type="number"
                value={formState.values.phone || ''}
              />
            </Grid>
          </Grid>

          {
            showMore && (
              <div>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <div className={classes.iconStyle}>
                      <LanguageIcon />
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={1} className={classes.spacing}>
                    <Select
                      className={classes.selectStyle}
                      name="websiteDrop"
                      value={formState.values.websiteDrop || 'Select'}
                      onChange={handleChange}
                    >
                      <MenuItem value="website" selected>Website</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={5} sm={7} className={classes.spacing}>
                    <TextField
                      error={hasError('websiteName')}
                      fullWidth
                      label="website"
                      className={classes.textFieldStyle}
                      helperText={
                        hasError('websiteName') ? formState.errors.websiteName[0] : null
                      }
                      name="websiteName"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.websiteName || ''}
                    />
                  </Grid>
                  <Grid item xs={3} sm={2}>
                    <Link
                      className={classes.addMore}
                      component="button"
                      variant="body1"
                    >
                      <AddCircleOutlineIcon />
                      Add More
                    </Link>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <div className={classes.iconStyle}>
                      <RoomIcon />
                    </div>
                  </Grid>
                  <Grid item xs={10} className={classes.spacing}>
                    <TextField
                      error={hasError('addressLine1')}
                      fullWidth
                      className={classes.textFieldStyle}
                      label="Address line 1"
                      helperText={
                        hasError('addressLine1') ? formState.errors.addressLine1[0] : null
                      }
                      name="addressLine1"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.addressLine1 || ''}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.gridHeight}
                >
                  <Grid item xs={2} />
                  <Grid item xs={10} className={classes.spacing}>
                    <TextField
                      error={hasError('addressLine2')}
                      fullWidth
                      className={classes.textFieldStyle}
                      label="Address line 2"
                      helperText={
                        hasError('addressLine2') ? formState.errors.addressLine2[0] : null
                      }
                      name="addressLine2"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.addressLine2 || ''}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  className={classes.gridHeight}
                >
                  <Grid item xs={2} sm={2} />
                  <Grid item xs={10} sm={2} className={classes.spacing}>
                    <TextField
                      error={hasError('country')}
                      fullWidth
                      className={classes.textFieldStyle}
                      helperText={hasError('country') ? formState.errors.country[0] : null}
                      label="Country"
                      name="country"
                      type="text"
                      onChange={handleChange}
                      value={formState.values.country || ''}
                    />
                  </Grid>
                  <Grid item xs={10} sm={3} className={classes.spacing}>
                    <TextField
                      error={hasError('city')}
                      fullWidth
                      className={classes.textFieldStyle}
                      helperText={
                        hasError('city') ? formState.errors.city[0] : null
                      }
                      label="City"
                      name="city"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.city || ''}
                    />
                  </Grid>
                  <Grid item xs={10} sm={2} className={classes.spacing}>
                    <TextField
                      error={hasError('state')}
                      fullWidth
                      className={classes.textFieldStyle}
                      helperText={
                        hasError('state') ? formState.errors.state[0] : null
                      }
                      label="state"
                      name="state"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.state || ''}
                    />
                  </Grid>
                  <Grid item xs={10} sm={3} className={classes.spacing}>
                    <TextField
                      error={hasError('zipCode')}
                      fullWidth
                      className={classes.textFieldStyle}
                      helperText={
                        hasError('zipCode') ? formState.errors.zipCode[0] : null
                      }
                      label="Zip Code"
                      name="zipCode"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.zipCode || ''}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <div className={classes.iconStyle}>
                      <LocalOfferIcon />
                    </div>
                  </Grid>
                  <Grid item xs={4} className={classes.spacing}>
                    <TextField
                      error={hasError('addTags')}
                      fullWidth
                      className={classes.textFieldStyle}
                      helperText={
                        hasError('addTags') ? formState.errors.addTags[0] : null
                      }
                      label="Add Tags"
                      name="addTags"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.addTags || ''}
                    />
                  </Grid>
                </Grid>
              </div>
            )
          }
        </CardContent>
        <CardActions className={classes.actions}>
          <Link
            component="button"
            variant="body1"
            className={classes.showMore}
            onClick={() => setShowMore(!showMore)}
          >
            {
              showMore
                ? (
                  <>
                    Show less
                    <ArrowDropUpIcon />
                  </>
                )
                : (
                  <>
                    Show More
                    <ArrowDropDownIcon />
                  </>
                )
            }
          </Link>
          <div>
            <Button
              onClick={onClose}
              variant="contained"
              color="default"
              className={classes.action__button}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={onClose}
              variant="contained"
              className={classes.action__button}
            >
              Save
            </Button>
          </div>
        </CardActions>
      </Card>
    </Modal>
  );
}

ContactModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

ContactModal.defaultProps = {
  open: false,
  onClose: () => {}
};

export default ContactModal;
