# app/models/blog_post.rb
class BlogPost < ApplicationRecord
  # Validations
  validates :title, presence: true, uniqueness: true
  validates :content, presence: true, length: { minimum: 50 }
  validates :author, presence: true

  # Scopes
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }

  # Add slug functionality for SEO-friendly URLs (Optional)
  extend FriendlyId
  friendly_id :title, use: :slugged
end
