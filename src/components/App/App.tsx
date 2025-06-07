import css from './App.module.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import NoteList from '../NoteList/NoteList';
import NoteModal from '../NoteModal/NoteModal';
import Pagination from '../Pagination/Pagination';
import SearchBox from '../SearchBox/SearchBox';

import {useState} from 'react';
import {useDebounce} from 'use-debounce';
import {useMutation} from '@tanstack/react-query';
import {fetchNotes} from '../../services/noteService';