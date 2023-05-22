import { createStyles, rem } from '@mantine/core'

export const HEADER_HEIGHT: string = rem(64)

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100vw',
        height: HEADER_HEIGHT,
        margin: 'auto',
        paddingInline: '5%',
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
