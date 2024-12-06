import { useQuery } from 'react-query';
import { fetchProjects } from '../lib/api';
import type { Project } from '../types/project';

export function useProjects() {
  return useQuery<Project[]>('projects', fetchProjects);
}