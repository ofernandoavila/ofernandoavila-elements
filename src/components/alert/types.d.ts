type IAlertType = 'danger' | 'success' | 'warning' | 'info';

interface IAlertProps {
    type: IAlertType;
    mesage: string;
}