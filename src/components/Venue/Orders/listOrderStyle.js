import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles(() => ({
    appBar: {
        boxShadow: '0 0'
    },
    indicatorColor: {
        backgroundColor: '#4F147B',
        height: '4px'
    },
    textColor: {
        color: 'var(--amplify-light-grey)',        
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 600
    },
    order: {
        borderRadius: '15px',
        minHeight: '87px',
        marginTop: '10px',
        boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)'
    },
    headOrder: {
        width: '86px',        
        borderRadius: '15px 0 0 15px',
        fontSize: '16px'
    },
    headOrderPrice: {
        fontWeight: '600'
    },
    headOrderItem: {
        color: '#4A4A4A'
    },
    orderOnProgress: {
        backgroundColor: '#FFCC47',
    },
    orderCompleted: {
        backgroundColor: '#40F27C'
    },
    selected: {
        color: '#4F147B'
    }
}));

export default useStyle