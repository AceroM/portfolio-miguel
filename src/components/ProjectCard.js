import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 300,
        maxWidth: 500,
        margin: 10,
        '&:hover' : {
            opacity: 0.6
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

class ProjectCard extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.image}
                        title="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            { this.props.title }
                        </Typography>
                        <Typography component="p">
                            { this.props.description }
                        </Typography>
                        <br/>
                        { this.props.tags }
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            View
                        </Button>
                        <Button size="small" color="primary">
                            See Code
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(ProjectCard);