import {alpha, AppBar, Box, Container, MenuItem, styled, Toolbar} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 6px)`,
    backdropFilter: 'blur(14px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export const Header = () => {
    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                width: '100%',
                mt: 'calc(var(--template-frame-height, 0px) )',
            }}
        >
            <Container>
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Box>
                            <MenuItem>
                                Games
                            </MenuItem>
                            <MenuItem>
                                <AccountCircleIcon/>
                            </MenuItem>
                        </Box>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    )
}