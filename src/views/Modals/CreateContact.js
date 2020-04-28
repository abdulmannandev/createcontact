import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Divider,
  Typography,
  Card,
  CardContent,
  colors,
  Button,
} from '@material-ui/core';

import Page from 'src/components/Page';
import ContactModal from './ContactModal';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  section: {
    '& + &': {
      marginTop: theme.spacing(5)
    }
  }
}));

function CreateContact() {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  return (
    <Page
      className={classes.root}
      title="Forms"
    >
      <Container maxWidth="lg">
        <Typography variant="overline">display a modal</Typography>
        <Divider className={classes.divider} />
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            Click to display modal
          </Typography>
          <Card>
            <CardContent>
              <Button
                color="primary"
                onClick={() => setModal(true)}
                variant="contained"
              >
                Open Modal
              </Button>
            </CardContent>
          </Card>
          <ContactModal
            onClose={() => setModal(false)}
            open={modal}
          />
        </div>
      </Container>
    </Page>
  );
}

export default CreateContact;
