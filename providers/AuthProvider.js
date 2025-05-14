"use client";
import { AuthContext } from '@/context/AuthContext'
import { auth } from '@/services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useReducer } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

const initialState = {
    user: null,
    loading: true,
    error: null
};

const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR'
}

const reducerFunction = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN:
            return { 
                ...state, 
                user: action.payload, 
                loading: false, 
                error: null 
            };
        case AUTH_ACTIONS.LOGOUT:
            return { 
                ...state, 
                user: null, 
                loading: false, 
                error: null 
            };
        case AUTH_ACTIONS.SET_LOADING:
            return { 
                ...state, 
                loading: true,
                error: null 
            };
        case AUTH_ACTIONS.SET_ERROR:
            return { 
                ...state, 
                error: action.payload, 
                loading: false 
            };
        case AUTH_ACTIONS.CLEAR_ERROR:
            return { 
                ...state, 
                error: null 
            };
        default:
            return state;
    }
}

function AuthProvider({ children = null }) {
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    useEffect(() => {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING });
        const unsubscribe = onAuthStateChanged(auth, 
            (user) => {
                if (user) {
                    dispatch({ 
                        type: AUTH_ACTIONS.LOGIN, 
                        payload: {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        }
                    });
                } else {
                    dispatch({ type: AUTH_ACTIONS.LOGOUT });
                }
            },
            (error) => {
                dispatch({ 
                    type: AUTH_ACTIONS.SET_ERROR, 
                    payload: error.message 
                });
            }
        );
        
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            dispatch({ type: AUTH_ACTIONS.SET_LOADING });
            await signOut(auth);
            dispatch({ type: AUTH_ACTIONS.LOGOUT });
        } catch (error) {
            dispatch({ 
                type: AUTH_ACTIONS.SET_ERROR, 
                payload: error.message 
            });
        }
    }

    const clearError = () => {
        dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
    }

    return (
        <AuthContext.Provider 
            value={{
                ...state, 
                dispatch, 
                logout,
                clearError
            }}
        >
            {state.loading ? <LoadingSpinner /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider