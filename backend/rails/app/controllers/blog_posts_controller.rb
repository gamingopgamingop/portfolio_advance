# app/controllers/blog_posts_controller.rb
class BlogPostsController < ApplicationController
  before_action :set_blog_post, only: [:show, :edit, :update, :destroy]

  # GET /blog_posts
  def index
    @blog_posts = BlogPost.recent.published
  end

  # GET /blog_posts/:id
  def show
  end

  # GET /blog_posts/new
  def new
    @blog_post = BlogPost.new
  end

  # POST /blog_posts
  def create
    @blog_post = BlogPost.new(blog_post_params)
    if @blog_post.save
      redirect_to @blog_post, notice: 'Blog post was successfully created.'
    else
      render :new
    end
  end

  # GET /blog_posts/:id/edit
  def edit
  end

  # PATCH/PUT /blog_posts/:id
  def update
    if @blog_post.update(blog_post_params)
      redirect_to @blog_post, notice: 'Blog post was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /blog_posts/:id
  def destroy
    @blog_post.destroy
    redirect_to blog_posts_url, notice: 'Blog post was successfully destroyed.'
  end

  private

  # Set the blog post for actions like show, edit, update, and destroy
  def set_blog_post
    @blog_post = BlogPost.find(params[:id])
  end

  # Define allowed parameters
  def blog_post_params
    params.require(:blog_post).permit(:title, :content, :author, :published, :published_at)
  end
end
