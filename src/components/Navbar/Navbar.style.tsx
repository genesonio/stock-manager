import { createStyles, rem } from '@mantine/core'

export const HEADER_HEIGHT: string = rem(64)

const useStyles = createStyles((theme) => ({
    root: {
        width: '100vw',
        height: HEADER_HEIGHT,
        paddingInline: '5%',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
    },
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        display: 'flex',
        flexDirection: 'column',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    buttons: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}))

export default useStyles
