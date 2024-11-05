import { supabase } from '../services/api';

export const getPosts = async () => {
  const { data: posts, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }

  return posts;
};

export const getPostBySlug = async (id) => {
  //TODO: BUSCAR UM POST EM ESPECIFICO.
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }

  return post;
};
