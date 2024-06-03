import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        if (Object.values(data).some(value => value === '' && value !== 'website')) {
            return;
        }
        setUsers([...users, data]);
        reset();
    };

    const clearTable = () => {
        setUsers([]);
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input {...register('name', { required: true })} />
                    {errors.name && <span>Ничего не найдено</span>}
                </div>
                <div>
                    <label>Username</label>
                    <input {...register('username', { required: true })} />
                    {errors.username && <span>Ничего не найдено</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input {...register('email', { required: true })} />
                    {errors.email && <span>Ничего не найдено</span>}
                </div>
                <div>
                    <label>Phone</label>
                    <input {...register('phone', { required: true })} />
                    {errors.phone && <span>Ничего не найдено</span>}
                </div>
                <div>
                    <label>Website</label>
                    <input {...register('website')} />
                </div>
                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            <h2>Пользователи</h2>
            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                            <button onClick={() => deleteUser(index)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserForm;
