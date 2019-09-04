import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NetworkIcon from '@material-ui/icons/Wifi';
import VehicleIcon from '@material-ui/icons/DriveEta';
import GroupIcon from '@material-ui/icons/GroupRounded'
import EquipamentsIcon from '@material-ui/icons/Build'
import ServicesIcon from '@material-ui/icons/SubjectOutlined'
import ReportIcon from '@material-ui/icons/Timeline'

import SettingsIcon from '@material-ui/icons/Settings';
import AccountIcon from '@material-ui/icons/AccountBox';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }
}));

export default function Sidebar({ handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><EquipamentsIcon /></ListItemIcon>
          <ListItemText primary="Equipamentos" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><ServicesIcon /></ListItemIcon>
          <ListItemText primary="Serviços" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><VehicleIcon /></ListItemIcon>
          <ListItemText primary="Veículos" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Equipe" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><NetworkIcon /></ListItemIcon>
          <ListItemText primary="Rede" />
        </ListItem>
        <Divider />
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><ReportIcon /></ListItemIcon>
          <ListItemText primary="Relatórios" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><AccountIcon /></ListItemIcon>
          <ListItemText primary="Minha conta" />
        </ListItem>
        <ListItem button style={{ paddingLeft: '23px' }}>
          <ListItemIcon><PowerIcon /></ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  );
}